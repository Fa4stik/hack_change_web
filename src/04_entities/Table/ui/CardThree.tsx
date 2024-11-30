import {
	ContactMail,
	ContactPhone,
	ContactPlace,
	EmptyUser,
} from '@/05_shared/assets'
import { MainButton } from '@/05_shared/ui/Button'
import { useUiStore } from '@/04_entities/Store'

type CardThreeProps = {}

export const CardThree = ({}: Readonly<CardThreeProps>) => {
	const setIsShowTable = useUiStore(state => state.setIsShowTable)
	const isShowTable = useUiStore(state => state.isShowTable)

	return (
		<div className='bg-footer p-6 rounded-lg flex flex-col gap-4'>
			<p className='opacity-40'>21 сотрудник</p>
			<h5 className='font-semibold text-xl leading-6'>
				Отдел анализа трендов и технологий
			</h5>
			<div className='border-y-2 border-solid border-stroke py-4'>
				<p className='pb-2'>Руководитель</p>
				<div className='flex justify-between items-center'>
					<EmptyUser />
					<div>
						<p className='font-extrabold pb-2'>Рамиль Структура</p>
						<p>Генеральный директор</p>
					</div>
				</div>
			</div>
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
					<ContactPlace width={34} height={34} />
					<a href='google.com/'>
						г. Москва Ленинградский проспект, дом 4, строение 52
					</a>
				</div>
			</div>
			<MainButton onClick={() => setIsShowTable(!isShowTable)}>
				Сотрудники
			</MainButton>
		</div>
	)
}
