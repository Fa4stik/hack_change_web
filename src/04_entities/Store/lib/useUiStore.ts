import { create } from 'zustand'

type State = {
	isShowTable: boolean
	isOpenModal: boolean
	breadcrumbs: string[]
}

type Actions = {
	setIsShowTable: (isShowTable: boolean) => void
	setBreadcrumb: (breadcrumb: string) => void
	setIsOpenModal: (isOpenModal: boolean) => void
}

export const useUiStore = create<State & Actions>(set => ({
	isShowTable: false,
	breadcrumbs: ['Главная'],
	isOpenModal: false,
	setIsShowTable: isShowTable => set({ isShowTable }),
	setBreadcrumb: breadcrumb => set({ breadcrumbs: ['Главная', breadcrumb] }),
	setIsOpenModal: isOpenModal => set({ isOpenModal }),
}))
