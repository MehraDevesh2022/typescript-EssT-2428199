var Anime = /** @class */ (function () {
    function Anime(Type, Genre, Studio, Episodes, Rating) {
        this.Type = Type;
        this.Genre = Genre;
        this.Studio = Studio;
        this.Episodes = Episodes;
        this.Rating = Rating;
    }
    Anime.prototype.getAnime = function () {
        return this.Type + " " + this.Genre + " " + this.Studio + " " + this.Episodes + " " + this.Rating;
    };
    return Anime;
}());
