System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, ParticleSystem, systemEvent, SystemEvent, geometry, CameraComponent, PhysicsSystem, Vec3, math, quat, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Ray;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      ParticleSystem = _cc.ParticleSystem;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      geometry = _cc.geometry;
      CameraComponent = _cc.CameraComponent;
      PhysicsSystem = _cc.PhysicsSystem;
      Vec3 = _cc.Vec3;
      math = _cc.math;
      quat = _cc.quat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c320aZ2SENBtb6VXwRHvPfI", "ray", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Ray
       * DateTime = Fri Oct 29 2021 09:34:06 GMT+0800 (中国标准时间)
       * Author = fywxk
       * FileBasename = ray.ts
       * FileBasenameNoExtension = ray
       * URL = db://assets/scripts/ray.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("Ray", Ray = (_dec = ccclass('Ray'), _dec2 = property(ParticleSystem), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class Ray extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "par", _descriptor, this);

          _initializerDefineProperty(this, "player", _descriptor2, this);

          _defineProperty(this, "ray", null);

          _defineProperty(this, "targetDir", new Vec3());

          _defineProperty(this, "move", false);
        }

        start() {
          // [3]
          // BatchingUtility.batchStaticModel()
          this.ray = new geometry.Ray();
          systemEvent.on(SystemEvent.EventType.TOUCH_END, e => {
            this.node.getComponent(CameraComponent).screenPointToRay(e.getLocation().x, e.getLocation().y, this.ray);

            if (PhysicsSystem.instance.raycast(this.ray)) {
              const r = PhysicsSystem.instance.raycastResults;

              for (let i = 0; i < r.length; i++) {
                const item = r[i];

                if (item.collider.node.name == "Terrain") {
                  console.log("点击了地面");
                  this.par.node.worldPosition = item.hitPoint;
                  this.par.play();
                  this.targetDir = item.hitPoint.subtract(this.player.worldPosition);
                  let rad = Vec3.angle(this.targetDir, this.player.forward);
                  this.player.rotate(math.Quat.fromEuler(quat(), 0, rad, 0));
                  this.move = true;
                }
              }
            }
          }, this);
        }

        update(deltaTime) {
          if (this.move) {
            this.player.setPosition(this.par.node.worldPosition); // this.player.position.add(ve3);   
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "par", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ray.js.map