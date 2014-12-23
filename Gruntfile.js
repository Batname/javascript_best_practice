module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch : {
            coffee : {
                files : 'lessons/**/*.coffee',
                tasks : 'coffee'
            }
        },
        coffee : {
            compile: {
                files: {
                    'app.js': ['lessons/**/*.coffee']
                }
            }
        }
    });

    // здесь будут подключаться необходимые модули
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');

    // а здесь - вызываться таски
    grunt.registerTask('default', ['coffee', 'watch']);
};