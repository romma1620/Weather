export interface Weather{
    id: number;
    main: {
      feels_like: number,
      temp: number
    };
    name: string;
}
