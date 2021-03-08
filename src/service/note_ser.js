import Note, { sequelize } from "../models/notes";

let note = Note.init(sequelize);

export let create = (keya, titleb, bodyc) => {
  let result = note.build({
    key: keya,
    title: titleb,
    body: bodyc
  });
  result
    .save()
    .then(res => {
      return res;
    })
    .catch(function(err) {
      console.log(err);
    });
};

export let update = (id1, key2, title3, body4) => {
  note
    .update({ key: key2, title: title3, body: body4 }, { where: { id: id1 } })
    .then(res => {
      return res;
    });
};

export let read = id => {
  let result = note
    .findAll({ where: { id: id } })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

export let keys = () => {
  let result = note
    .findAll()
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

export let id = (key, title, body) => {
  let result = note
    .findAll({
      where: { key: key, title: title, body: body },
      attributes: ["id"]
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

export let destroy = id => {
  note
    .destroy({ where: { id: id } })
    .then(res => {
      return res;
    })
    .catch(function(err) {
      console.log(err);
    });
};
