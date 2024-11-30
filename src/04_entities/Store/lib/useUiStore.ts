import { create } from 'zustand'

type State = {
	isShowTable: boolean
}

type Actions = {
	setIsShowTable: (isShowTable: boolean) => void
}

export const useUiStore = create<State & Actions>(set => ({
	isShowTable: false,
	setIsShowTable: isShowTable => set({ isShowTable }),
}))
