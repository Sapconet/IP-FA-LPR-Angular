import { Injectable } from '@angular/core';
import { LicencePlate } from '../models/licplat';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { BehaviorSubject, Subject } from 'rxjs';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { HttpClient, HttpHeaders } from '@angular/common/http';


const cache = new InMemoryCache();

const subClient = new SubscriptionClient('ws://localhost:3000/graphql', {
  reconnect: true
});

const wsLink = new WebSocketLink(subClient);

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql'
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache,
  link,
});


@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  LicencePlateList = new BehaviorSubject<LicencePlate[]>([]);
  test: LicencePlate[] = [];
  subObservable = new Subject<any>();
  appStateObs = new Subject<string>();

  constructor() {
    this.licplatSub();
    this.startStateSub();
  }


  async licplatSub() {
    client.subscribe({
      query: gql`
       subscription licplatSub {
        licplatSub {
          id
          prediction
          value
          image
        }
       }
       `
    }).subscribe(res => {
      if (this.test && this.test.length > 0) {
        const item = this.test.find(x => {
          return x.prediction === res.data.licplatSub.prediction;
        });
        if (item) {
          const index = this.test.indexOf(item);
          this.test[index] = res.data.licplatSub;
          this.LicencePlateList.next(this.test);
        } else {
          this.test.push(res.data.licplatSub);
          this.LicencePlateList.next(this.test);
        }
      } else {
        this.test.push(res.data.licplatSub);
        this.LicencePlateList.next(this.test);
      }
    });
  }

  async startStateSub() {
    client.subscribe({
      query: gql`
       subscription test {
         stateSub
       }
       `
    }).subscribe(res => {
      this.appStateObs.next(res.data.stateSub);
    });
  }

  getLicencePlates() {
    return this.LicencePlateList.asObservable();
  }

  getAppState() {
    return this.appStateObs.asObservable();
  }

  startPlateGrab() {
    client.query({
      query: gql`
      query startPlateGrab{
        startPlateGrab
      }
      `
    }).then(result => {
      console.log("Result " + JSON.stringify(result.data));
    }).catch(
      err => console.log("Error " + err)
    );

    // const HttpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    // this.http.post('https://012169b1.ngrok.io/send-img', 'startPlateGrab', HttpOptions).subscribe(
    //   val => {
    //     console.log("post call successful value returned in body", val);
    //     this.presentToast("Well, hello sailor!");
    //   },
    //   response => {
    //     console.log("post call in error", response);
    //     this.presentToast(JSON.stringify(response.error.text));

    //   },
    //   () => {
    //     console.log("The post observable is now completed.");
    //   }
    // );
  }

  stopPlateGrab() {
    client.query({
      query: gql`
      query stopPlateGrab{
        stopPlateGrab
      }
      `
    }).then(result => {
      console.log(result.data);
    }).catch(
      err => console.log(err)
    );
  }

  resumePlateGrab() {
    client.query({
      query: gql`
        query resumePlateGrab {
          resumePlateGrab
      }
      `
    }).then(result => {
      console.log(result.data);
    }).catch(
      err => console.log(err)
    );
  }

  suspendPlateGrab() {
    client.query({
      query: gql`
        query suspendPlateGrab {
          suspendPlateGrab
      }
      `
    }).then(result => {
      console.log(result.data);
    }).catch(
      err => console.log(err)
    );
  }
}
