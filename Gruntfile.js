module.exports = function(grunt) { //makes things station-global

	require('load-grunt-tasks')(grunt);

	// grunt.loadNpmTasks('grunt-contrib-sass');
	// grunt.loadNpmTasks('grunt-autoprefixer');
	// grunt.loadNpmTasks('grunt-combine-media-queries');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-csscomb');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-connect');
	// grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('grunt-contrib-clean');


	grunt.initConfig({
		sass: {
			style: {
				files: {
					'build/css/style.css': 'source/sass/style.scss'
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
					livereload: true,
					// port: 9000,
					// base: '.',
					// protocol: 'http',
					// hostname: 'localhost',
					// open: true,
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

/*
plagins:

1) SASS/LESS => CSS;
2) Autoprefixer;
3) grunt-watch - run things on file change;automation
4) @media concatination (combine-media-queries)
5) CSS minification (cssmin)
6) css comb - helps with following styliguide
7) image optimization (imagemin)
8) clean & copy


package.json

*/