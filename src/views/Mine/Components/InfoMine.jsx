import './index.css'
import logo from '../../../assets/bf.png'
import { Icon } from 'tdesign-icons-vue-next'
export default {
    name: 'InfoMine',
    render() {
        const authorInfos = [
            { label: 'Author', value: 'Airhang', icon: 'gender-male' },
            { label: 'Work', value: '前端小白', icon: 'desktop' },
            { label: 'Base', value: 'Fujian', icon: 'location' },
            { label: 'Singer', value: 'JayZhou', icon: 'heart' },
            { label: 'Ceo', value: '乔布斯', icon: 'heart' },
        ]
        return (
            <div class="mine-box">
                <img class="logo-sty" src={logo} />
                {authorInfos.map((el) => {
                    return (
                        <div class="cell">
                            <Icon class="right" name={el.icon} />
                            {el.value}
                        </div>
                    )
                })}
            </div>
        )
    },
}
