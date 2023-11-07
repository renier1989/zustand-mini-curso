import { create } from 'zustand'

interface Bear {
  id: number;
  name : string;
}

interface BearState{
  blackBears : number,
  polarBears : number,
  pandaBears : number,

  bears: Bear[],

  increaseBlackBears : (by:number)=> void,
  doNothing : () => void
}

export const useBearStore = create<BearState>()((set) => ({
  blackBears: 12,
  polarBears: 10,
  pandaBears: 10,

  bears : [
    {id : 1 , name: 'osos # 1'},
  ],

  increaseBlackBears: (by:number) => set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by:number) => set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by:number) => set((state) => ({ pandaBears: state.pandaBears + by })),
  
  doNothing: () => set((state) => ({bears: [...state.bears]})),

}))