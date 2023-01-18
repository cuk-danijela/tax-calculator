module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#1B73E8',
            },
            backgroundImage: {
                'tax': "url('./src/assets/tax.jpg')",
                
            }
        },
    },
    plugins: [],
};