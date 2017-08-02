// AdminLTE Gruntfile
module.exports = function (grunt) { // jshint ignore:line
    'use strict'

    grunt.initConfig({
        pkg   : grunt.file.readJSON('package.json'),
        watch : {
            less : {
                // Compiles less files upon saving
                files: ['build/less/*.less'],
                tasks: ['less:development', 'less:production', 'notify:less']
            },
            js   : {
                // Compile js files upon saving
                files: ['build/js/*.js', 'dist/js/app.js'],
                tasks: ['js', 'notify:js']
            },
        },

        // copy: {
        //     main: {
        //         expand: true,
        //         src: 'build/js/*',
        //         dest: 'dist/js/',
        //     },
        // },
        // Notify end of tasks
        notify: {
            less: {
                options: {
                    title  : 'Ebuy',
                    message: 'LESS finished running'
                }
            },
            js  : {
                options: {
                    title  : 'Ebuy',
                    message: 'JS bundler finished running'
                }
            }
        },
        // 'less'-task configuration
        // This task will compile all less files upon saving to create both AdminLTE.css and AdminLTE.min.css
        less  : {
            // Development not compressed
            development  : {
                files: {


                    'dist/css/bootstrap.css':"build/less/bootstrap.min.less",
                    'dist/css/jquery.fancybox.css':"build/less/jquery.fancybox.less",
                    'dist/css/slick.css':"build/less/slick.less",
                    'dist/css/style.css':"build/less/style.less",


                     'dist/css/category.css':"build/less/category.less",

                }
            },
            // Production compressed version
            production   : {
                options: {
                    compress: true
                },
                files  : {

                    'dist/css/bootstrap.min.css':"build/less/bootstrap.min.less",
                    'dist/css/jquery.fancybox.min.css':"build/less/jquery.fancybox.less",
                    'dist/css/slick.min.css':"build/less/slick.less",
                    'dist/css/style.min.css':"build/less/style.less",
                    'dist/css/category.min.css':"build/less/category.less",

                }
            },

        },

        // Uglify task info. Compress the js files.
        uglify: {
            options   : {
                mangle          : true,
                preserveComments: 'some'
            },
            production: {
                files: {


                    'dist/js/jquery-migrate.min.js'     : ['build/js/jquery-migrate.min.js'],
                    'dist/js/jquery-1.11.0.min.js'     : ['build/js/jquery-1.11.0.min.js'],
                    'dist/js/jquery.fancybox.js'     : ['build/js/jquery.fancybox.js'],
                    'dist/js/html5.js'     : ['build/js/html5.js'],
                    'dist/js/slick.min.js'     : ['build/js/slick.min.js'],
                    'dist/js/custom.js'     : ['build/js/custom.js'],

                }
            }
        },

        // Concatenate JS Files
        concat: {
            options: {
                separator: '\n\n',
                banner   : '/*! AdminLTE app.js\n'
                + '* ================\n'
                + '* Main JS application file for AdminLTE v2. This file\n'
                + '* should be included in all pages. It controls some layout\n'
                + '* options and implements exclusive AdminLTE plugins.\n'
                + '*\n'
                + '* @Author  Almsaeed Studio\n'
                + '* @Support <https://www.almsaeedstudio.com>\n'
                + '* @Email   <abdullah@almsaeedstudio.com>\n'
                + '* @version <%= pkg.version %>\n'
                + '* @license MIT <http://opensource.org/licenses/MIT>\n'
                + '*/\n\n'
                + '// Make sure jQuery has been loaded\n'
                + 'if (typeof jQuery === \'undefined\') {\n'
                + 'throw new Error(\'AdminLTE requires jQuery\')\n'
                + '}\n\n'
            },
            dist   : {
                src : [
                    'build/js/jquery-migrate.min.js',
                    'build/js/jquery-1.11.0.min.js',
                    'build/js/jquery.fancybox.js',
                    'build/js/html5.js',
                    'build/js/slick.min.js',
                    'build/js/custom.js',

                ],
                dest: 'dist/js/all.js'
            }
        },

        // Build the documentation files
        includes: {
            build: {
                src    : ['*.html'], // Source files
                dest   : 'documentation/', // Destination directory
                flatten: true,
                cwd    : 'documentation/build',
                options: {
                    silent     : true,
                    includePath: 'documentation/build/include'
                }
            }
        },

        // Optimize images
        image: {
            dynamic: {
                files: [
                    {
                        expand: true,
                        cwd   : 'build/img/',
                        src   : ['**/*.{png,jpg,gif,svg,jpeg}'],
                        dest  : 'dist/img/'
                    }
                ]
            }
        },

        // Validate JS code
        jshint: {
            options: {
                jshintrc: 'build/js/.jshintrc'
            },
            grunt  : {
                options: {
                    jshintrc: 'build/grunt/.jshintrc'
                },
                src    : 'Gruntfile.js'
            },
            core   : {
                src: 'build/js/*.js'
            },
            demo   : {
                src: 'dist/js/demo.js'
            },
            pages  : {
                src: 'dist/js/pages/*.js'
            }
        },

        jscs: {
            options: {
                config: 'build/js/.jscsrc'
            },
            core   : {
                src: '<%= jshint.core.src %>'
            },
            pages  : {
                src: '<%= jshint.pages.src %>'
            }
        },

        // Validate CSS files
        csslint: {
            options: {
                csslintrc: 'build/less/.csslintrc'
            },
            dist   : [
                'dist/css/category.css'
            ]
        },

        // Validate Bootstrap HTML
        bootlint: {
            options: {
                relaxerror: ['W005']
            },
            files  : ['pages/**/*.html', '*.html']
        },

        // Delete images in build directory
        // After compressing the images in the build/img dir, there is no need
        // for them
        clean: {
            build: ['build/img/*']
        }
    })


    // Load all grunt tasks

    // LESS Compiler
    grunt.loadNpmTasks('grunt-contrib-less')
    // Watch File Changes
    grunt.loadNpmTasks('grunt-contrib-watch')
    // Compress JS Files
    grunt.loadNpmTasks('grunt-contrib-uglify')
    // Include Files Within HTML
    grunt.loadNpmTasks('grunt-includes')
    // Optimize images
    grunt.loadNpmTasks('grunt-image')
    // Validate JS code
    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-jscs')
    // Delete not needed files
    grunt.loadNpmTasks('grunt-contrib-clean')
    // Lint CSS
    grunt.loadNpmTasks('grunt-contrib-csslint')
    // Lint Bootstrap
    grunt.loadNpmTasks('grunt-bootlint')
    // Concatenate JS files
    grunt.loadNpmTasks('grunt-contrib-concat')
    // Notify
    grunt.loadNpmTasks('grunt-notify')

    // Linting task
    grunt.registerTask('lint', ['jshint', 'csslint', 'bootlint'])
    // JS task
    grunt.registerTask('js', ['concat', 'uglify'])

    // The default task (running 'grunt' in console) is 'watch'
    grunt.registerTask('default', ['watch'])
}
