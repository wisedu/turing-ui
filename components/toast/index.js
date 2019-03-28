import Vue from 'vue'
import { Toast } from 'vant'

const TgToast = {};

TgToast.success = function(options){
	Toast.success(options)
}

export default TgToast;