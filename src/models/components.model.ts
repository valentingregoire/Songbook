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
        return this.loaded / this.toLoad;
    }

    setToLoad(toLoad: number): void {
        this.toLoad = toLoad;
    }

    load(): void {
        this.loaded++;
    }
}

export class ComponentProgress {
    loadingItems: Map<ComponentType, ComponentLoadingProgress> = new Map([
        [ComponentType.Songs, new ComponentLoadingProgress(2)],
        [ComponentType.Songbooks, new ComponentLoadingProgress(2)],
        [ComponentType.Settings, new ComponentLoadingProgress(1)],
        [ComponentType.Pages, new ComponentLoadingProgress(1)]

    ]);

    get progress(): ComponentLoadingProgress {
        let loaded: number = 0;
        let toLoad: number = 1;

        this.loadingItems.forEach((value: ComponentLoadingProgress) => {
            loaded += value.loaded;
            toLoad += value.toLoad;
        });

        const totalProgress: ComponentLoadingProgress = new ComponentLoadingProgress(toLoad);
        totalProgress.loaded = loaded;

        return totalProgress;
    }
}