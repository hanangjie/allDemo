import {createElement, Component, render, findDOMNode} from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import style from './style';

console.log(style)
class PanResponderSample extends Component {
		render () {
			return(
				<View style={style.container}>
					<View style={style.container} >
	                	<View style={style.bg}>
	                		<Image source={require('./statics/bcg.png')}  style={style.moneyBg} />1
	                	</View>
		                <View class="money-bar">
							<View class="money-use money-left" href="../billDetail/index.html?type=week">
								<View class="t" id="weekBill">近7日应还</View>
								<View class="num can" init="weekRepayAmount">¥0.00</View>
							</View>
							<View class="money-use" href="../billDetail/index.html?type=all">
								<View class="t">所有应还</View>
								<View class="num" init="allRepayAmount">¥0.00</View>
							</View>
						</View>
	                	<View class="money-tool" href="../loanRecord/loanRecord.html" >
	                		<View class="title">借还记录</View>
	                		<View class="dir"><Image src="./statics/right_sub.png" /></View>
	                	</View>
	                </View>
	                <View class="money-help" href="../help/index.html"><Image src="./statics/caption_lujing@3x.png" alt="" />白条说明</View>
				</View>
                )
		}
}	

export default PanResponderSample