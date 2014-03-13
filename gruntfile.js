module.exports = function (grunt) {
    grunt.initConfig({

        jade: {
            html: {
                options: {
                    pretty: true,
                    client: false,
                    data: {
                        timestamp: "<%= grunt.template.today('yyyy') %>"
                    }
                },
                files: {
                    "index.html": "src/index.jade",
                }
            }

        }
        });
        grunt.loadNpmTasks('grunt-contrib-jade');
        
      grunt.registerTask('default', ['jade']);
      };
