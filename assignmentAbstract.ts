interface GPS_enabled {
    GPS():string;
  }
  
  abstract class Car {
    Wheel(): string {
        return '4 wheeler';
    }
    CheckAC(): string {
        return 'Ac is available';
    }
    CallFacility() : string {
        return "Call facility supported"
    }
    abstract Price(): number;
    abstract getTotalSeats(): number;
    abstract Color(): string;
  }
  
  class Toyota extends Car implements GPS_enabled{
    Price(): number {
        return 1000000;
    }
    getTotalSeats(): number {
        return 5;
    }
    Color(): string {
        return 'white';
    }
    GPS(): string {
      return 'GPS Not available';
  }
  }
  
  class Hyundai extends Car implements GPS_enabled {
    Price(): number {
        return 900000;
    }
    getTotalSeats(): number {
        return 7;
    }
    Color(): string {
        return 'gray';
    }
    GPS(): string {
        return 'GPS available';
    }
  }
  let myHyundai = new Hyundai();
  console.log(myHyundai.GPS());
  let myToyota = new Toyota();
  console.log(myToyota.GPS());
  