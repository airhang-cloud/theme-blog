import Parallax from 'parallax-js'
import { Button, Icon } from 'tdesign-vue-next'
import router from '../../router'
import './index.css'
export default {
    name: 'Cover',
    render() {
        function handlerJump(path) {
            router.push(path)
        }
        return (
            <div className="container">
                <div id="scene">
                    <div data-depth="0.7" class="box-sty">
                        <h1 class="focus-in-contract-bck">Welcome</h1>
                    </div>
                </div>
                <Icon
                    class="icon-sty heartbeat"
                    name="arrow-right"
                    size="35px"
                    on-click={() => {
                        handlerJump('/dash')
                    }}
                />
            </div>
        )
    },
    mounted() {
        const scene = document.getElementById('scene')
        // eslint-disable-next-line no-new
        new Parallax(scene)
    },
}
