module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			style: {
				files: {
					'build/css/style.css': 'source/sass/main.scss'
				}
			}
		},
		autoprefixer: {
	    options: {
	      browsers: ['last 2 versions', 'ie 10']
	    },
	    style: {
	       src: 'build/css/style.css'
	    }
	  },
	  cmq: {
	    style: {
	      files: {
	      	'build/css/style.css': 'build/css/style.css'
	      } 
	    }
	  },
	  cssmin: {
		  options: {
		    keepSpecialComments: 0
		  },
		  style: {
		    files: {
		      'build/css/style.min.css': ['build/css/style.css']
		    }
		  }
		},
		csscomb: {
			style: {
				expand: true,
				src: 'source/sass/**/*.scss'
			}
		},
		watch: {
			options: {
				livereload: true,
			},
		  css: {
		    files: 'source/sass/**/*.scss',
		    tasks: ['sass'],
		  },
		},
		connect: {
			server: {
				options: {
					livereload: true
				}
			}
		},
		copy: {
			build: {
				files: [{
					expand: true,
					cwd: "source",
					src: [
						"font/**",
						"img/**",
						"js/**",
						"index.html"
					],
					dest: "build"
				}]
			}
		},
		clean: {
			build: ["build"]
		},
		replace: {
			dist: {
				options: {
					patterns: [{
						match: /..\/..\/source\//g,
						replacement: '../'
					}]
				},
				files: [
					{expand: true, src: ['build/css/style.css']}
				]
			}
		},
	});

	grunt.registerTask('build', [
		'clean',
		'copy',
		'sass',
		'replace',
		'autoprefixer',
		'cmq',
		'cssmin'
	]);

	grunt.registerTask('server', [
		'connect',
		'watch'
	]);

};