export enum ComponentType {
    Components = "Components",
    Songs = "Songs",
    Songbooks = "Songbooks",
    Settings = "Settings",
    Pages = "Pages",
}

export class ComponentLoadingProgress {
    loaded: number = 0;
    toLoad: number;

    constructor(toLoad: number) {
        this.toLoad = toLoad;
    }

    get progress(): number {
        return this.loaded * 100 / this.toLoad;
    }

    setToLoad(toLoad: number): void {
        this.toLoad = toLoad;
    }

    load(): void {
        this.loaded++;
    }
}

export class ComponentProgress {
    loadingItems: {[key in ComponentType]: ComponentLoadingProgress} = {
        [ComponentType.Songs]: new ComponentLoadingProgress(1),
        [ComponentType.Songbooks]: new ComponentLoadingProgress(1),
        [ComponentType.Settings]: new ComponentLoadingProgress(1),
        [ComponentType.Pages]: new ComponentLoadingProgress(1),
        [ComponentType.Components]: new ComponentLoadingProgress(1),
    }

    load(componentType: ComponentType): void {
        this.loadingItems[componentType].load();
    }

    setToLoad(componentType: ComponentType, toLoad: number): void {
        this.loadingItems[componentType].setToLoad(toLoad);
    }

    get progress(): ComponentLoadingProgress {
        let loaded: number = 0;
        let toLoad: number = 1;

        Object.values(this.loadingItems).forEach((value: ComponentLoadingProgress) => {
            loaded += value.loaded;
            toLoad += value.toLoad;
        });

        const totalProgress: ComponentLoadingProgress = new ComponentLoadingProgress(toLoad);
        totalProgress.loaded = loaded;

        return totalProgress;
    }

    get loaded(): boolean {
        return this.progress.progress === 100;
    }
}