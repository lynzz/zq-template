/*
 * grunt-init-zq-template
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// 模板简单介绍信息
exports.description = '创建欧美专区开发模板.';

// 开始回答项目相关问题前，控制台打印的相关信息
exports.notes = '这段信息出现位置：回答各种项目相关的信息之前 ' +
    '\n\n'+
    '逐个填写就行，如果不想填的会可以直接enter跳过';

// 结束回答项目相关问题后，控制台打印出来的信息
exports.after = '项目主框架已经搭建好了，现在可以运行 ' +
    '\n\n' +
    '1、npm install 安装项目依赖的node模块\n'+
    '2、grunt 运行任务，包括文件压缩、合并、校验等\n\n';

// 如果运行grunt-init运行的那个目录下，有目录或文件符合warOn指定的模式
// 则会跑出警告，防止用户不小心把当前目录下的文件覆盖了，一般都为*，如果要强制运行，可加上--force
// 例：grunt-init --force zq-template
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

    init.process({type: 'jquery'}, [
        // Prompt for these values.
        init.prompt('name'),
        init.prompt('title'),
        init.prompt('description', '2p.com feature template'),
        init.prompt('version', '1.0.0'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('author_url'),
    ], function(err, props) {
        props.keywords = [];

        // 需要拷贝处理的文件，这句一般不用改它
        var files = init.filesToCopy(props);

        // 实际修改跟处理的文件，noProcess表示不进行处理
        init.copyAndProcess(files, props, {noProcess: 'js/lib/**'});

        // 生成package.json，供Grunt、npm使用
        init.writePackageJSON('package.json', {
            name: props.name,
            version: props.version,
            description: props.description,
            author_name: props.author_name,
            author_email: props.author_email,
            author_url: props.author_url,
            npm_test: 'grunt qunit',

            node_version: '>= 0.8.0',
            devDependencies: {
                "grunt-contrib-requirejs": "0.4.x",
                "grunt-contrib-jshint": "0.1.x",
                "grunt-contrib-qunit": "0.1.x"
            }
        });

        // All done!
        done();
    });

};
