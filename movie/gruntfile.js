module.exports = function(grunt){

	grunt.initConfig({
		watch: {
			jade: ['views/**'],
			option: {
				livereload: true
			}
		},
		js: {
			files: ['public/js/**', 'models/**/*.js', 'schemas/**/*.js'],
			// tasks: ['jshint'],
			option: {
				livereload: true
			}
		},
		nodemon: {
			dev: {
				option: {
					file: 'app.js',
					args: [],
					ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
					watchedExtensions: ['js'],
					watchedFolders: ['./'],
					debug: true,
					delayTime: 1,
					env: {
						PORT: 3000
					},
					cwd: __dirname
				}
			}
		},
		concurrent: {
			tasks: ['nodemon', 'watch'],
			option: {
				logConcurrentOutput: ture
			}
		}
	})


	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-nodemon')
	grunt.loadNpmTasks('grunt-concurrent')


	grunt.option('force', true)
	grunt.registerTask('default', ['concurrent'])
}