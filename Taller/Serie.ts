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
}