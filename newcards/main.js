
//$("#card").get("https://api.github.com/users");
/*let cards = $.ajax ({
    url : "https://api.github.com/users",
    data : {
        format: "json"
    },
    type: 'GET'
}

)



document.getElementById("#card").innerText = cards */

/*function  loadData() {
$.ajax({
    url : "https://api.github.com/users",
  type: "GET",
    dataType: "JSON",
    data: JSON.stringify({  }),
    success:function(data){
      
      JSON.stringify(data.map(data => {
        console.log(data)
        $("#card").append("<img width='200' src=" + data.avatar_url + "/>");
        $("#card").append("<p>" + data.login + "</p>");
        
      }))
      
    }
})

}

$("document").ready = loadData() */


function readFormData(formDiv, retArr = false) {
  var fieldIndex = 0;
  var processdeFields = [];
  var validationReport0 = [];
  var retData = {};
  $(formDiv).find("[fields]").each(function() {
      fieldIndex++;
      $(this).attr("fieldmarker", fieldIndex);
  })
  var getValidationResult = (rulesStr, value) => {
      var rulesArr = rulesStr.split("|");
      resultArr = [];
      for (var ruleIdx in rulesArr) {
          var r = gumpToFormValidator(rulesArr[ruleIdx], value);
          if (r.valid == false)
              resultArr.push(r);
      }
      return resultArr;
  };
  var readFieldElements = function(obj, excludes, validationReport) {
      var ret = {};
      $(obj).find("[fields]").each(function() {
          if (!excludes.includes($(this).attr('fieldmarker'))) {
              var myFieldName = $(this).attr('fields');
              if (ret.hasOwnProperty(myFieldName)) {
                  if (!Array.isArray(ret[myFieldName])) {
                      var dataHolder = ret[myFieldName];
                      ret[myFieldName] = [];
                      ret[myFieldName].push(dataHolder);
                  }
                  var val = $(this).val();
                  if ($(this).prop("type") == "radio" || $(this).prop("type") == "checkbox") {
                      if ($(this).attr("returnval") == "bool")
                          val = $(this).prop("checked");
                      else {
                          if ($(this).prop("checked"))
                              val = $(this).val();
                          else
                              val = "";
                      }
                  }
                  if (($(this).prop("type") == "radio" || $(this).prop("type") == "checkbox") && ret.hasOwnProperty($(this).attr('fields'))) {
                      if (val != "" && val != false)
                          ret[myFieldName].push(val);
                  } else
                      ret[myFieldName].push(val);

              } else {
                  var val = $(this).val();
                  if ($(this).prop("type") == "radio" || $(this).prop("type") == "checkbox") {
                      if ($(this).attr("returnval") == "bool")
                          val = $(this).prop("checked");
                      else {
                          if ($(this).prop("checked"))
                              val = $(this).val();
                          else
                              val = "";
                      }
                  }
                  if (($(this).prop("type") == "radio" || $(this).prop("type") == "checkbox") && ret.hasOwnProperty($(this).attr('fields'))) {
                      if ((val != "" && val != false))
                          ret[$(this).attr('fields')] = val;
                  } else
                      ret[$(this).attr('fields')] = val;
              }
              excludes.push($(this).attr('fieldmarker'));
              if ($(this)[0].hasAttribute("rules")) {
                  var rulStr = $(this).attr("rules");
                  if (rulStr != "") {
                      var validate = getValidationResult(rulStr, $(this).val());
                      if (Array.isArray(validate)) {
                          if (validate.length > 0) {
                              validationReport[$(this).attr('fields')] = validate;
                          }
                      }
                  }
              }
          }
      });
      return validationReport, excludes, ret;
  };
  var combineFields = function(inData) {
      var ret = {};
      for (var idx in inData) {
          for (var idx2 in inData[idx]) {
              ret[idx2] = inData[idx][idx2];
          }
      }
      return ret;
  }
  var readGroupArrays = function(obj, excludes, validationReport) {
      var outArr = {};
      $(obj).find(".fieldclassarr").each(function() {
          var fieldClass = $(this);
          var fieldName = fieldClass.attr("fieldname");
          if ($(this).find(".fieldclassitems").length > 0) {
              var fieldclassitems = [];
              $(this).find(".fieldclassitems").each(function() {
                  var data = {};
                  if ($(this).find(".fieldclass").length > 0)
                      validationReport, excludes, data["fieldobjects"] = readGroupObjects(this, excludes, validationReport);
                  if ($(this).find(".fieldclassarr").length > 0)
                      validationReport, excludes, data["fieldarrays"] = readGroupArrays(this, excludes, validationReport);
                  validationReport, excludes, data["fieldelements"] = readFieldElements(this, excludes, validationReport);
                  data = combineFields(data);
                  fieldclassitems.push(data);
              });
              outArr[fieldName] = fieldclassitems;
          }

      });
      return validationReport, excludes, outArr;
  }
  var readGroupObjects = function(obj, excludes, validationReport) {
      var outArr = {};
      $(obj).find(".fieldclass").each(function() {
          var fieldClass = $(this);
          var fieldName = fieldClass.attr("fieldname");
          var data = {};
          if ($(this).find(".fieldclass").length > 0)
              validationReport, excludes, data["fieldobjects"] = readGroupObjects(this, excludes, validationReport);
          if ($(this).find(".fieldclassarr").length > 0)
              validationReport, excludes, data["fieldarrays"] = readGroupArrays(this, excludes, validationReport);
          validationReport, excludes, data["fieldelements"] = readFieldElements(this, excludes, validationReport);
          outArr[fieldName] = combineFields(data);
      });
      return validationReport, excludes, outArr;
  };

  validationReport0, processdeFields, retData["fieldobjects"] = readGroupObjects(formDiv, processdeFields, validationReport0);
  validationReport0, processdeFields, retData["fieldarrays"] = readGroupArrays(formDiv, processdeFields, validationReport0);
  validationReport0, processdeFields, retData["fieldelements"] = readFieldElements(formDiv, processdeFields, validationReport0);
  retData = combineFields(retData);
  $(formDiv).find("[fields]").each(function() {
      $(this).removeAttr("fieldmarker");
  })
  if (retArr == true)
      return { "validation": validationReport0, "data": retData };
  return retData;
}



















































