/* Resources.js
<<<<<<< HEAD
 * 这是一个简单的图片加载工具。他简化了图片加载的过程从而这些图片可以在你的游戏里面使用。
 * 这个工具还包含一个缓存层从而当你试图加载同一张图片多次的时候可以重复使用缓存的图片
 */

=======
 * This is simply an image loading utility. It eases the process of loading
 * image files so that they can be used within your game. It also includes
 * a simple "caching" layer so it will reuse cached images if you attempt
 * to load the same image multiple times.
 */
>>>>>>> origin/master
(function() {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

<<<<<<< HEAD
    /* 这是公开访问的图片加载函数, 它接受一个指向图片文件的字符串的数组或者是单个图片的
     * 路径字符串。然后再调用我们私有的图片加载函数。
     */
    function load(urlOrArr) {
        if(urlOrArr instanceof Array) {
            /* 如果开发者传进来一个图片数组，循环访问每个值，然后调用我们的图片加载器 */
=======
    /* This is the publicly accessible image loading function. It accepts
     * an array of strings pointing to image files or a string for a single
     * image. It will then call our private image loading function accordingly.
     */
    function load(urlOrArr) {
        if(urlOrArr instanceof Array) {
            /* If the developer passed in an array of images
             * loop through each value and call our image
             * loader on that image file
             */
>>>>>>> origin/master
            urlOrArr.forEach(function(url) {
                _load(url);
            });
        } else {
<<<<<<< HEAD
            /* 如果开发者传进来的不是一个数组，那么就可以认为参数值是一个字符串，
             * 然后立即调用我们的图片加载器即可。
=======
            /* The developer did not pass an array to this function,
             * assume the value is a string and call our image loader
             * directly.
>>>>>>> origin/master
             */
            _load(urlOrArr);
        }
    }

<<<<<<< HEAD
    /* 这是我们私有的图片加载函数， 它会被公有的图片加载函数调用 */
    function _load(url) {
        if(resourceCache[url]) {
            /* 如果这个 URL 之前已经被加载了，那么它会被放进我们的资源缓存数组里面，
             * 然后直接返回那张图片即可。
             */
            return resourceCache[url];
        } else {
            /* 否则， 这个 URL 之前没被加载过而且在缓存里面不存在，那么我们得加载这张图片
             */
            var img = new Image();
            img.onload = function() {
                /* 一旦我们的图片已经被加载了，就把它放进我们的缓存，然后我们在开发者试图
                 * 在未来再次加载这个图片的时候我们就可以简单的返回即可。
                 */
                resourceCache[url] = img;
                /* 一旦我们的图片已经被加载和缓存，调用所有我们已经定义的回调函数。
=======
    /* This is our private image loader function, it is
     * called by the public image loader function.
     */
    function _load(url) {
        if(resourceCache[url]) {
            /* If this URL has been previously loaded it will exist within
             * our resourceCache array. Just return that image rather
             * re-loading the image.
             */
            return resourceCache[url];
        } else {
            /* This URL has not been previously loaded and is not present
             * within our cache; we'll need to load this image.
             */
            var img = new Image();
            img.onload = function() {
                /* Once our image has properly loaded, add it to our cache
                 * so that we can simply return this image if the developer
                 * attempts to load this file in the future.
                 */
                resourceCache[url] = img;

                /* Once the image is actually loaded and properly cached,
                 * call all of the onReady() callbacks we have defined.
>>>>>>> origin/master
                 */
                if(isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };

<<<<<<< HEAD
            /* 将一开始的缓存值设置成 false 。在图片的 onload 事件回调被调用的时候会
             * 改变这个值。最后，将图片的 src 属性值设置成传进来的 URl 。
=======
            /* Set the initial cache value to false, this will change when
             * the image's onload event handler is called. Finally, point
             * the image's src attribute to the passed in URL.
>>>>>>> origin/master
             */
            resourceCache[url] = false;
            img.src = url;
        }
    }

<<<<<<< HEAD
    /* 这个函数用来让开发者拿到他们已经加载的图片的引用。如果这个图片被缓存了，
     * 这个函数的作用和在那个 URL 上调用 load() 函数的作用一样。
=======
    /* This is used by developers to grab references to images they know
     * have been previously loaded. If an image is cached, this functions
     * the same as calling load() on that URL.
>>>>>>> origin/master
     */
    function get(url) {
        return resourceCache[url];
    }

<<<<<<< HEAD
    /* 这个函数是否检查所有被请求加载的图片都已经被加载了。
=======
    /* This function determines if all of the images that have been requested
     * for loading have in fact been properly loaded.
>>>>>>> origin/master
     */
    function isReady() {
        var ready = true;
        for(var k in resourceCache) {
            if(resourceCache.hasOwnProperty(k) &&
               !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

<<<<<<< HEAD
    /* 这个函数会在被请求的函数都被加载了这个事件的回调函数栈里面增加一个函数。*/
=======
    /* This function will add a function to the callback stack that is called
     * when all requested images are properly loaded.
     */
>>>>>>> origin/master
    function onReady(func) {
        readyCallbacks.push(func);
    }

<<<<<<< HEAD
    /* 这个对象通过创造一个公共的资源对象来定义公有的开发者可以访问的函数。*/
=======
    /* This object defines the publicly accessible functions available to
     * developers by creating a global Resources object.
     */
>>>>>>> origin/master
    window.Resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();
