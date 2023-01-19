module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], //적용한 파일에만 빌드하도록 설정
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
};
