import {create, SetState} from 'zustand'

interface State {
  drawerVisibility: boolean
  changeDrawerVisibility(visibility: boolean): void
}

export const useUiStore = create<State>((set: SetState<State>) => {

  function changeDrawerVisibility(visibility: boolean) {
    set(state => ({
      drawerVisibility: visibility
    }))
  }


  return {
    drawerVisibility: false,
    changeDrawerVisibility
  }
})
