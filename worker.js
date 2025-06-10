export default {
    async fetch(request) {
        return new Response("Cloudflare Worker is running!", { status: 200 });
    }
};
