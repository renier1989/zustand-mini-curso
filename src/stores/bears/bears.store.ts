import { create } from 'zustand'


interface BearState{
  blackBears : number,
  polarBears : number,
  pandaBears : number,

  increaseBlackBears : (by:number)=> void,
}

const useBearStore = create<BearState>()((set) => ({
  blackBears: 10,
  polarBears: 10,
  pandaBears: 10,

  increaseBlackBears: (by:number) => set((state) => ({ blackBears: state.blackBears + 1 })),
  
}))