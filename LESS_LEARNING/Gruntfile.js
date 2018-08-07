module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean:{

            output:['ToBeCleaned/*']
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Task definitions
    grunt.registerTask('default', ['clean']);
};