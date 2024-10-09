import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, any>();

  constructor() { }

  // Get data from the cache
  get(key: string): any {
    
    return this.cache.has(key) ? this.cache.get(key) :  console.log("cash key null",key);
  }

  // Set data in the cache
  set(key: string, value: any): void {
    this.cache.set(key, value);
   console.log('set cache ', key);
  }

  // Optionally clear the cache
  clear(): void {
    this.cache.clear();
  }
}
