const loadScriptAsync = async function(src)  {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.text =  content;
      script.src =  src;
}

const createScriptWithContentAsync = async function(content) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.text =  content;

      return script;

}
