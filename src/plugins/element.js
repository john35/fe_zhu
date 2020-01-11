import Vue from 'vue'
import { Table,TableColumn,Pagination ,Message} from 'element-ui'

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.prototype.$message = Message;
