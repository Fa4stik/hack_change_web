import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material'
import { MainButton } from '@/05_shared/ui/Button'
import { useUiStore } from '@/04_entities/Store'
import {
	ContactMail,
	ContactPhone,
	ContactPlace,
	EmptyUser,
} from '@/05_shared/assets'

export const MainModal = () => {
	const isOpen = useUiStore(state => state.isOpenModal)
	const setIsOpenModal = useUiStore(state => state.setIsOpenModal)

	const handleClose = () => setIsOpenModal(false)

	return (
		<Dialog
			open={isOpen}
			onClose={handleClose}
			PaperProps={{ sx: { maxWidth: '50vw' } }}
		>
			<DialogTitle id='alert-dialog-title'>
				<span className='font-bold text-2xl'>Анализ трендов и технологий</span>
			</DialogTitle>
			<DialogContent>
				<div className='border-y-2 border-solid border-stroke py-4 mb-4'>
					<p className='mb-4'>Сотрудник отдела</p>
					<div className='flex gap-4 items-center'>
						<EmptyUser />
						<div>
							<p className='font-bold mb-2'>Петц Александра Ивановна</p>
							<p className='opacity-50'>Frontend Developer</p>
						</div>
					</div>
				</div>
				<div className='flex justify-between'>
					<div className='flex flex-col gap-4'>
						<div className='flex gap-2'>
							<ContactPhone />
							<a href='tel:+7 (999) 000 00 00' className='text-link'>
								+7 (999) 000 00 00
							</a>
						</div>
						<div className='flex gap-2'>
							<ContactMail />
							<a href='mailto:info@mtslink.ru' className='text-link'>
								info@mtslink.ru
							</a>
						</div>
						<div className='flex gap-2'>
							<ContactPlace width={22} />
							<a href='google.com/'>
								г. Москва Ленинградский проспект, дом 4, строение 52
							</a>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<p>Должность: Frontend Developer </p>
						<p>Роль: frontend </p>
						<p>Подразделение 1: MTC Link</p>
						<p>Подразделение 2: Центральный офис</p>
						<p>Подразделение 3: Департамент инновационных решений</p>
						<p>Подразделение 4: Отдел анализа трендов и технологий</p>
					</div>
				</div>
			</DialogContent>
			<DialogActions>
				<MainButton onClick={handleClose}>ОК</MainButton>
			</DialogActions>
		</Dialog>
	)
}
