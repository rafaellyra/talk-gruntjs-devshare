module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 9001,
					hostname: '*',
					open: true,
					keepalive: true
				}
			},
			watch: {
				options: {
					port: 9001,
					hostname: '*',
					open: true
				}
			}
		},
		compass: {
            dev: {
                options: {
                    sassDir: 'assets/scss/',
                    cssDir: 'assets/css/',
                    imagesDir: 'assets/images/',
                    fontsDir: 'assets/fonts/',
                    outputStyle: 'expanded',
                    generatedImagesDir: 'assets/images/sprites/',
                    relativeAssets: true
                }
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc',
                livereload: true
            },
            strict: {
                src: ['assets/css/**/*.css']
            }
        },
        watch: {
            css: {
                files: ['assets/scss/**/*'],
                tasks: ['buildcss']
            }
        }
	});
	//carregando plugins
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//registrando tarefas

	grunt.registerTask('createserver', ['connect:server']);
	grunt.registerTask('buildcss', ['compass:dev', 'csslint']);
	grunt.registerTask('run', ['connect:watch', 'watch']);
};
