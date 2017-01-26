import { Http } from '@angular/http';

export class Portal {
	constructor() {
		this.url = "api/portal/:query/:attr"
	}
	
	private assignParamsToUrl(params) {
		url = this.url;
		last = null;
		for (key in params) {
			if(!key || !params[key] || params[key] === null) {
				search = params[last]+"/";
				return url.substring(0, (url.indexOf(search) + search.length));
			} else {
				last = key;
				pattern = ":" + key;
				re = new RegExp(pattern, "g");
				url = url.replace(re, params[key]);
			}
		}
		return url;
	}
	
	listServerGroups(params) {
		url = this.assignParamsToUrl(params);
		return url;
	}
}