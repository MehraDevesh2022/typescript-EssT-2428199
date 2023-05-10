class Anime {
    Type ;
    Genre ;
    Studio ;
    Episodes ;
    Rating ;
    constructor(Type, Genre, Studio, Episodes, Rating) {    
        this.Type = Type;
        this.Genre = Genre;
        this.Studio = Studio;
        this.Episodes = Episodes;
        this.Rating = Rating;
    }   
    getAnime() {
        return this.Type + " " + this.Genre + " " + this.Studio + " " + this.Episodes + " " + this.Rating;
    }


    

}