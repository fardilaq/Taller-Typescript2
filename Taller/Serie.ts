export class Serie {
    constructor(
        public id: number,
        public name: string,
        public network: string,
        public seasons: number,
        public synopsis: string,
        public url: string,
        public imageUrl: string
    ) {}

    static promedioSeasons(series: Serie[]): number {
        if (series.length === 0) return 0;
        const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
        return totalSeasons / series.length;
    }
    static byId(series: Serie[], id: number): Serie | undefined {
    return series.find(s => s.id === id);
    }

    toCardHTML(): string {
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