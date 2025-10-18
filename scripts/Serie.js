export class Serie {
    constructor(id, name, network, seasons, synopsis, url, imageUrl) {
        this.id = id;
        this.name = name;
        this.network = network;
        this.seasons = seasons;
        this.synopsis = synopsis;
        this.url = url;
        this.imageUrl = imageUrl;
    }
    static promedioSeasons(series) {
        if (series.length === 0)
            return 0;
        const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
        return totalSeasons / series.length;
    }
}
