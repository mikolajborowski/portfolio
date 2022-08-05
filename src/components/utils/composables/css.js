import {useCssVar} from "@vueuse/core/index";
import {ref} from 'vue'

export function useCssVarFromWindowContext(variableName) {
    const el = ref(null)
    const variable = useCssVar(variableName, el, {initialValue: '#1d1d1d'})

    return {variable}
}