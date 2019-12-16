export class SearchResult {
    public id: string;
    public title: string;
    public description: string;
    public thumbnailUrl: string;
    public videoUrl: string;

    constructor(result?: any) {
        this.id = result && result.id || null;
        this.title = result && result.title || null;
        this.description = result && result.description || null;
        this.thumbnailUrl = result && result.thumbnailUrl || null;
        this.videoUrl = result && result.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    }
}
