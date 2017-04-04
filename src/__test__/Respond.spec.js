import Respond from "../Respond";
import {autorun} from "mobx";
import sinon from "sinon";
import {expect} from "chai";

describe('Respond', () => {
  let resize = (respond, clientWidth, clientHeight) => {
    let update = respond.update;
    update({target: {document: {documentElement: {clientWidth, clientHeight}}}});
  };
  beforeEach(() => {
    global.window = {document: {documentElement: {clientWidth: 300, clientHeight: 300}}};
    global.window.addEventListener = () => 0;
    global.window.removeEventListener = () => 0;
  });
  it('works', () => {
    let respond = new Respond();
    let xsfn = sinon.spy();
    let xsdisposer = autorun(() => {
      xsfn(respond.xs);
    });
    
    let smfn = sinon.spy();
    let smdisposer = autorun(() => {
      smfn(respond.sm);
    });
    
    expect(xsfn.firstCall.args[0]).to.equal(true);
    expect(smfn.firstCall.args[0]).to.equal(false);
    
    resize(respond, 767, 600);
    expect(xsfn.calledTwice).to.equal(false);
    expect(smfn.calledOnce).to.equal(true);
    
    resize(respond, 768, 600);
    expect(xsfn.calledTwice).to.equal(true);
    expect(xsfn.secondCall.args[0]).to.equal(false);
    
    expect(smfn.calledTwice).to.equal(true);
    expect(smfn.secondCall.args[0]).to.equal(true);
    
    global.window.removeEventListener = sinon.spy();
    xsdisposer();
    expect(global.window.removeEventListener.called).to.equal(false);
    smdisposer();
    expect(global.window.removeEventListener.called).to.equal(true);
  });
  
  it('also works on height', () => {
    let respond = new Respond({custom: [400, 500, 400, 500]});
    
    let cfn = sinon.spy();
    let disposer = autorun(() => {
      cfn(respond.custom);
    });
    expect(cfn.firstCall.args[0]).to.equal(false);
    resize(respond, 450, 399);
    expect(cfn.calledTwice).to.equal(false);
    resize(respond, 450, 400);
    expect(cfn.calledTwice).to.equal(true);
    expect(cfn.secondCall.args[0]).to.equal(true);
    disposer();
  })
});