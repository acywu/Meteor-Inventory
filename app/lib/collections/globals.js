ReactionCore = {};
ReactionCore.Schemas = {};

// extend ReactionCore and add common methods
//
_.extend(ReactionCore, {
  
  /**
   * ReactionCore.schemaIdAutoValue
   * @summary used for schemea injection autoValue
   * @example autoValue: ReactionCore.schemaIdAutoValue
   * @return {String} returns randomId
   */
  schemaIdAutoValue: function () {
    if (this.isSet && Meteor.isServer) {
      return this.value;
    } else if (Meteor.isServer && this.operator !== "$pull" ||
      Meteor.isClient && this.isInsert) {
      return Random.id();
    }
    return this.unset();
  }
});
