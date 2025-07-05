import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoserviceService {
  private db!: IDBDatabase;
  videos: any[] = []; 

  canvas:any;
  videosthumbnail:any;
  EVENT_NAME = 'image-updated'
  eventTarget:any;
  constructor() {
    this.openDatabase();
  }

  openDatabase() {
    const openRequest = indexedDB.open('videoDatabase', 1);

    openRequest.onupgradeneeded = (event: any) => {
      this.db = openRequest.result;
      if (!this.db.objectStoreNames.contains('videos')) {
        let videoStore = this.db.createObjectStore('videos', { keyPath: 'id', autoIncrement: true });
        videoStore.createIndex('video', 'video', { unique: false });
      }
    };
    

    openRequest.onsuccess = (event: any) => {
      console.log('IndexedDB opened successfully');
      this.db = openRequest.result;
      this.loadVideos();
    };

    openRequest.onerror = (event: any) => {
      console.error('IndexedDB Error:', event.target.error);
    };
  }

  storeVideo(file: File) {
    if (!this.db) {
      console.error("Database not initialized yet!");
      return;
    }

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      const videoBlob = new Blob([reader.result!], { type: file.type });

      const transaction = this.db.transaction('videos', 'readwrite');
      const store = transaction.objectStore('videos');

      const videoData = {
        id: Date.now(), // Unique ID
        name: file.name,
        type: file.type,
        blob: videoBlob,
      };

      const request = store.add(videoData);
      request.onsuccess = () => {
        console.log('Video successfully stored!');
        this.loadVideos(); // Refresh videos list
      };
      request.onerror = (event: any) => {
        console.error('Error storing video', event.target.error);
      };
    };
  }

  loadVideos() {
    if (!this.db) {
      console.error("Database not initialized yet!");
      return;
    }

    const transaction = this.db.transaction('videos', 'readonly');
    const store = transaction.objectStore('videos');
    const request = store.getAll();

    request.onsuccess = () => {
      this.videos = request.result.map(video => {
        const blob = new Blob([video.blob], { type: video.type });
        const url = URL.createObjectURL(blob);
        console.log(url);
        
       
        return { ...video, url, thumbnail: null };
      });

      
    };

    request.onerror = (event: any) => {
      console.error('Error fetching videos:', event.target.error);
    };
  }

 

  

  
  getVideos(): any[] {
    return this.videos;
  }
}
