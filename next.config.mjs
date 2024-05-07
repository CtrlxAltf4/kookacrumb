/** @type {import('next').NextConfig} */

const supabaseURL = 'sgssochabejdkykyprxw.supabase.co'

const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['@prisma/client', 'bycrypt']
    },
    images: {
        domains: [`${supabaseURL}`],
        formats: ['image/avif', 'image/webp'],
    },

    
    
};

export default nextConfig;
