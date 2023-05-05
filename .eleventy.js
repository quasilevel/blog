module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};

module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("posts/**/*.md");
    });

}