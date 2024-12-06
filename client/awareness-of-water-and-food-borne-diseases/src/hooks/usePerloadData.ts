import { AppDispatch } from "@/lib/store";
import { AsyncThunkAction } from "@reduxjs/toolkit";

type Action = () => AsyncThunkAction<any, any, any>;

async function usePreloadData(dispatch: AppDispatch, actions: Action[]) {
  await Promise.all(actions.map((action) => dispatch(action()).unwrap()));
}

export default usePreloadData;
