import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookgreenzoneService {

  constructor(private http: HttpClient) { }

  public getPricePerHourOfSelectedZone(advdays, gz, rz, startTime, endTime, occupancy){
    let params = new HttpParams();
    params = params.append('a',advdays);
    params = params.append('b',gz);
    params = params.append('c', rz);
    params = params.append('d', startTime);
    params = params.append('e', endTime);
    params = params.append('f', occupancy);
    return this.http.get("http://34.205.83.36:9000/MLBookingSimmulation_api", {params: params}).toPromise();
  }

  public checkOccupancy(zoneId){
    let params = new HttpParams();
   params = params.append('zoneId',zoneId);
    return this.http.post("http://34.205.83.36:5011/saveBooking", {params: params}).toPromise();
  }

  public saveBooking(userId, zoneId, bookingDate, startTime, endTime, cost){
    return this.http.post("http://34.205.83.36:5011/saveBooking", {
      UID : userId,
      zoneId : zoneId,
      date : bookingDate,
      starttime : startTime,
      endtime : endTime,
      cost : cost,
    }).toPromise();
  }

  public getGZIds(){
    return this.http.get("http://34.205.83.36:5011/getGZIds").toPromise();
  }
  public getRZIds(){
    return this.http.get("http://34.205.83.36:5011/getRZIds").toPromise();
  }

  public fillCalender(advdays, gz, rz, startTime, endTime,occupancy){
    let params = new HttpParams();
    params = params.append('a',advdays);
    params = params.append('b',gz);
    params = params.append('c',rz);
    params = params.append('d',startTime);
    params = params.append('e',endTime);
    params = params.append('f',occupancy);
    return this.http.get("http://34.205.83.36:9000/MLBookingSimmulation_api", {params: params}).toPromise();
  }

  async getNoOfPersonsPerDay(date){
    let params = new HttpParams();
    params = params.append('date',date);
    return this.http.get("http://34.205.83.36:5011/getNoOfPersonsPerDay", {params: params}).toPromise();
  }
  public getNoOfPersonsPerDayAndStartTime(date){
    let params = new HttpParams();
    params = params.append('date',date);
    return this.http.get("http://34.205.83.36:5011/getNoOfPersonsPerDayAndStartTime", {params: params}).toPromise();
  }

  
}
