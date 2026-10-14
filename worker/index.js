// Serves byte ranges for audio so browsers (iPhone Safari especially) can stream
// and seek. Runs only for /music/* (see run_worker_first in wrangler.toml);
// everything else, including the music pages themselves, comes straight from assets.

const RANGE = /^bytes=(\d*)-(\d*)$/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isAudio = /\.(mp3|m4a|ogg|wav|flac)$/i.test(url.pathname);
    if (!isAudio || (request.method !== 'GET' && request.method !== 'HEAD')) return env.ASSETS.fetch(request);

    // Always fetch the whole asset from the asset store, then slice.
    const full = await env.ASSETS.fetch(new Request(url.toString(), { method: 'GET' }));
    if (!full.ok) return full;

    const headers = new Headers();
    for (const h of ['content-type', 'cache-control', 'etag', 'last-modified']) {
      const v = full.headers.get(h);
      if (v) headers.set(h, v);
    }
    headers.set('accept-ranges', 'bytes');

    const range = request.headers.get('range');
    const buf = await full.arrayBuffer();
    const size = buf.byteLength;

    if (!range) {
      headers.set('content-length', String(size));
      return new Response(request.method === 'HEAD' ? null : buf, { status: 200, headers });
    }

    const m = RANGE.exec(range.trim());
    let start, end;
    if (m && m[1] === '' && m[2] !== '') { start = Math.max(0, size - Number(m[2])); end = size - 1; }
    else if (m && m[1] !== '') { start = Number(m[1]); end = m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1); }
    if (start === undefined || start > end || start >= size) {
      headers.set('content-range', `bytes */${size}`);
      return new Response(null, { status: 416, headers });
    }

    headers.set('content-range', `bytes ${start}-${end}/${size}`);
    headers.set('content-length', String(end - start + 1));
    return new Response(request.method === 'HEAD' ? null : buf.slice(start, end + 1), { status: 206, headers });
  },
};
