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
    static byId(series, id) {
        return series.find(s => s.id === id);
    }
    toCardHTML() {
        return `
        <div class="card text-dark shadow h-100">
        <img src="${this.imageUrl}" class="card-img-top poster-full" alt="${this.name}" referrerpolicy="no-referrer">

        <div class="card-body">
            <h5 class="card-title mb-2">${this.name}</h5>
            <p class="card-text" style="font-size:.95rem;">${this.synopsis}</p>
            <a href="${this.url}" target="_blank" rel="noopener" class="card-link">Sitio oficial</a>
        </div>
        </div>
    `;
    }
}
