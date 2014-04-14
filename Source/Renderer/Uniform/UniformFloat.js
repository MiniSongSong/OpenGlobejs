/**
 * Created by luosong on 2014/4/11.
 */
define(['Renderer/Uniform/Uniform'],function(Uniform){
    'use strict';

    var UniformFloat = function(name, type, location){
        this.Name = name;
        this.Size = null;
        this.Type = type;
        this.Location = location;
        this.Value = null;
    };

    UniformFloat.prototype.Set = function(gl){
        gl.uniform1f(this.Location,this.Value);
    };

    return UniformFloat;
});